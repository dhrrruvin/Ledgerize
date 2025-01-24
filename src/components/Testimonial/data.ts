// images
import img1 from "../../assets/images/avatars/img-1.jpg";
import img2 from "../../assets/images/avatars/img-2.jpg";
import img3 from "../../assets/images/avatars/img-3.jpg";

export interface ClientMember{
     avatar: string;
     name: string;
     designation: string;
     review: string;
}

const clientMembers: ClientMember[] = [
     {
          avatar: img1,
          name: 'Ana Russo',
          designation: 'CEO', 
          review: 'A very professional, proactive, helpful, trustworthy, valuable...these are some of the words that come to mind when I think about Greeva N.'
     },
     {
          avatar: img2,
          name: 'Ana Russo',
          designation: 'CEO', 
          review: 'A very professional, proactive, helpful, trustworthy, valuable...these are some of the words that come to mind when I think about Greeva N.'
     },
     {
          avatar: img3,
          name: 'Ana Russo',
          designation: 'CEO', 
          review: 'A very professional, proactive, helpful, trustworthy, valuable...these are some of the words that come to mind when I think about Greeva N.'
     }
]

export { clientMembers };