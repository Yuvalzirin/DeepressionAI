import { Post } from '../PatientsPanel/Patients.model'
import { PostRange, PostRanges } from './PatientPage.consts'

export const filterPosts = (posts: Post[], filter: PostRange) => {
  const now = new Date();
  switch (filter) {
    case PostRanges.LAST_DAY:
      return posts.filter(post => new Date(post.date) > new Date(now.setDate(now.getDate() - 1)));
    case PostRanges.LAST_WEEK:
      return posts.filter(post => new Date(post.date) > new Date(now.setDate(now.getDate() - 7)));
    case PostRanges.LAST_MONTH:
      return posts.filter(post => new Date(post.date) > new Date(now.setMonth(now.getMonth() - 1)));
    case PostRanges.ALL:
    default:
      return posts;
  }
};