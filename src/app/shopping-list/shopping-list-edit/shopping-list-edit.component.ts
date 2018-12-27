import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('form') shopListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
      this.subscription = this.shopListService.startedEditing.subscribe(
          (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shopListService.getIngredient(index);
            this.shopListForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
          }
      );
  }

  onAddItem(form: NgForm) {
      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
          this.shopListService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
          this.shopListService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();
    }

    onClear() {
        this.shopListForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shopListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
