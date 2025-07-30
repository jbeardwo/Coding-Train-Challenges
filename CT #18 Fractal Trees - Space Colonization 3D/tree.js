class Tree {
    constructor(){
        this.leaves = [];
        this.branches = [];

        for(let i = 0; i < 100; i++){
            this.leaves.push(new Leaf());
        }
        let pos = createVector(0, height/2);
        let dir = createVector(0, -1);
        let root = new Branch(null, pos, dir);
        this.branches.push(root);

        let current = root;
        let found = false;
        while(!found){
            for(let i = 0; i < this.leaves.length;i++){
                let d = p5.Vector.dist(current.pos, this.leaves[i].pos);
                if(d < max_dist){
                    found = true;
                }
                
            }
            if(!found){
                let branch = current.next();
                current = branch;
                this.branches.push(current);
            }
        }
    }

    grow(){
        for(let i = 0; i < this.leaves.length; i++){
            let leaf = this.leaves[i];


            let closestBranch = null;
            let closeDist = 100000;
            for(let j = 0; j< this.branches.length; j++){
                let branch = this.branches[j];
                let d = p5.Vector.dist(leaf.pos, branch.pos);
                if(d < min_dist){
                    leaf.reached = true;
                    closestBranch = null;
                    break;
                } else if(d < closeDist){
                    closestBranch = branch;
                    closeDist = d
                }
            }

            if(closestBranch != null){
                let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos)
                newDir.normalize();
                closestBranch.dir.add(newDir)
                closestBranch.count++;
                
            }

            
        }
        for(let i = this.leaves.length - 1; i >= 0; i--){
                if(this.leaves[i].reached){
                    this.leaves.splice(i,1);
                }
            }

        for(let i = this.branches.length - 1; i >= 0; i--){
            let branch = this.branches[i];
            if(branch.count > 0){
                branch.dir.div(branch.count + 1);
                let rand = p5.Vector.random2D();
                rand.setMag(0.3);
                branch.dir.add(rand);
                branch.dir.normalize();
                this.branches.push(branch.next()); 
            }
            branch.reset();
        }
    }

    show(){
        for(let i = 0; i < this.leaves.length; i++){
            this.leaves[i].show();
        }

        for(let i = 0; i < this.branches.length; i++){
            let sw = map(i, 0, this.branches.length, 10, 1);
            strokeWeight(sw);
            stroke(0);
            this.branches[i].show();
        }
    }
}