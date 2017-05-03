import { Picture } from './picture';
import { Base } from './base';
import { Story } from './story';
import { Event } from './event';
import { Link } from './link';
import { Faq } from './faq';
import { Reward } from './reward';

export class Project extends Base {
  id = '';
  title = '';
  category_id: string;
  image_url = '';
  video_url = '';
  pledged_amount = '';
  funded_amount = '';
  funding_model = '';
  category_name = '';
  user_name = '';
  total_backers = '';
  percent_funded = '';
  start_date = new Date();
  duration = '';
  pictures: Picture[] = [new Picture];
  rewards: Reward[] = [new Reward];
  faqs: Faq[] = [new Faq];
  links: Link[] = [new Link];
  story: Story = new Story;
}
