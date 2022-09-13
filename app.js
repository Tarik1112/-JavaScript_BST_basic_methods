console.log("Hello node in the terminal \nThis will be a basic BST project with all of the methods implemented\nProbably gonna expand it later!");



class Node {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;
        
        const newNode = new Node(value);

        const checkNode = (node) => {
            //checking whether appending node is greater or smaller then the parent node
            
            if(value < node.value){
                if(!node.left){
                    node.left = newNode;
                }else{
                    checkNode(node.left);
                }
            }else if(value > node.value){
                if(!node.right){
                    node.right = newNode;
                }else{
                    checkNode(node.right);
                }
            }
        } 

        checkNode(this.root);

    }

    min(){
        let currNode = this.root;

        while(currNode.left){
            currNode = currNode.left;
        }

        return currNode.value;
    }

    max(){
        let currNode = this.root;

        while(currNode.right){
            currNode = currNode.right
        }
        

        return currNode.value;
    }


}


let bst = new BST(8);

bst.insert(3);
bst.insert(10);
bst.insert(1);



console.log(bst.min());


