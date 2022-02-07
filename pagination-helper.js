class PaginationHelper {
  constructor (collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = [];
    let arr = [];
    for (let i = 0; i < this.collection.length; i++) {
      if ((i + 1) % this.itemsPerPage == 0) {
        arr.push(this.collection[i]);
        this.pages.push(arr);
        arr = [];
      } else {
        arr.push(this.collection[i]);
      }
    }

    this.pages.push(arr);
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return this.pages.length;
  }

  pageItemCount(pageIndex) {
    try {
      return this.pages[pageIndex].length;
    } catch (e) {
      return -1;
    }
  }

  pageIndex(itemIndex) {
    const item = this.collection[itemIndex];
    for (let i = 0; i < this.pages.length; i++) {
      const currentPage = this.pages[i];
      if (currentPage.indexOf(item) !== -1) {
        return i;
      }
    }

    return -1;
  }
}

// other solution, i tried and failed this but someone did it ....
// function PaginationHelper(collection, itemsPerPage){
//   this.collection = collection, this.itemsPerPage = itemsPerPage;
// }

// PaginationHelper.prototype.itemCount = function() {
//   return this.collection.length;
// }

// PaginationHelper.prototype.pageCount = function() {
//   return Math.ceil(this.collection.length / this.itemsPerPage);
// }

// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//   return pageIndex < this.pageCount() 
//     ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
//     : -1;
// }

// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//   return itemIndex < this.collection.length && itemIndex >= 0
//     ? Math.floor(itemIndex / this.itemsPerPage)
//     : -1;
// }

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1