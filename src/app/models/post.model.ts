export class Post{
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    constructor(title, content, loveIts, created_at){
        this.title = title;
        this.loveIts = loveIts;
        this.content = content;
        this.created_at = created_at;
    }
}