/* eslint-disable prettier/prettier */
import { MailService } from "./mail.service";

export class PostmarkMailServices implements MailService {
  sendEmail(): string {
    return'Post Mark'; 
  }
}