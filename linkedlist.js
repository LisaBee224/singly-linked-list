function Node(data){
  this.data = data;
  this.node = null;
}

function singlyList(){
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value){
  var node = new Node(value),
  current_node=this.head;

  if !(current_node){
    this.heade = node;
    this._length ++;
    return node;

    while(current_node.next){
        current_node= current_node.next
    }
    current_node.next =node;
    this._length++;
    return node;
  }

  SinglyList.prototype.searchAt = function(position){
    var current_node=this.head;
    length = this._length;
    count = 1;
    if (length === 0 || position < 1 || position > length){
      console.log('error');
    }
    while(count < position){
      current_node = current_node.next;
      count ++;
    }
    return current_node
  }
  SinglyList.prototype.remove=function(position){
    var current_node = this.head;
    length = this._length;
    count = 0;
    beforeNodeToDelete= null;
    nodeToDelete=null;
    deletedNode=null;

    if(position > length || position < 0){
      console.log('error');
    }
    if (position===1){
      this.head = current_node.next;
      deletedNode=current_node;
      current_node=null;
      this._length--;
      return deletedNode;
    }
    while(count<position){
      beforeNodeToDelete=current_node;
      nodeToDelete=current_node.next;
      count++;


    }
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode=nodeToDelete;
    nodeToDelete=null;
    this._lenghth--;
  }
  return deletedNode;
}