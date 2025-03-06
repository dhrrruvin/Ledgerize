// images
import blog1 from "../../assets/images/blog/crypto1.jpg";
import blog2 from "../../assets/images/blog/crypto2.jpg";
import blog3 from "../../assets/images/blog/crypto3.jpg";

export interface BlogData {
     title: string;
     image: string;
     date: string;
     time: string;
     description: string;
}

const blogsData: BlogData[] = [
     {
          title: 'Announcement',
          image: blog1,
          date: 'May 19 2020',
          time: '5 min read',
          description: 'Introducing blazzing fast new user interface',
     },
     {
          title: 'Bitcoin',
          image: blog1,
          date: 'May 21 2020',
          time: '2 min read',
          description: 'What you should know before buying bitcoin',
     },
     {
          title: 'Event',
          image: blog1,
          date: 'May 22 2020',
          time: '10 min read',
          description: 'A biggest crypto event to attend this month',
     },
];

export {blogsData}