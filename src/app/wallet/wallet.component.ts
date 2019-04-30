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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	
  }

}
