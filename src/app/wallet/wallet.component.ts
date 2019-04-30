import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

	publickey: string;
	privatekey: string;
	transactionForm: FormGroup;
	toAddress: string;
	etherAmount: string;
	wallet: any;
	provider: any;
	contractForm: FormGroup;
	message: string;
	value: string;
	abi: any;	
	contractAddress: any;

  constructor(private fb: FormBuilder) { 
      this.transactionForm = fb.group({
          'toAddress': [null],
          'etherAmount': [null]
      });
      this.contractForm = fb.group({
          'value': [null]
      })
      this.abi = [{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getValues","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
      this.contractAddress = "0x8a32989b65186d3596251d7d7c8a427a26669354";
  }

  ngOnInit() {
  	this.provider = ethers.getDefaultProvider('homestead');;
  }

  onSubmit() {
  	const randomWallet = ethers.Wallet.createRandom();
    this.publickey = randomWallet.address;
    this.privatekey = randomWallet.privateKey;
    this.wallet = new ethers.Wallet(this.privatekey, this.provider)
  }

  sendTransaction(form: any) {
    let transaction = {
      to: form.toAddress,
      value: ethers.utils.parseEther(form.etherAmount)
    }

    this.wallet.sendTransaction(transaction)
        .then((tx) => {
            console.log(tx);
        })
	}

	addToContract(form: any) {
          let contract = new ethers.Contract(this.contractAddress, this.abi, this.wallet);
          contract.add(form.value);
  }

  getValues() {
      let contract = new ethers.Contract(this.contractAddress, this.abi, this.wallet);
      contract.getValues()
              .then((result) => {
                  this.message = result;
              });
  }

}
