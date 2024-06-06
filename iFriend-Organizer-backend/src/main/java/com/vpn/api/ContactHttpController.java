package com.vpn.api;

import com.vpn.ContactRepository;
import com.vpn.to.Contact;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contacts")
@CrossOrigin
public class ContactHttpController {

    private final ContactRepository contactRepository;

    public ContactHttpController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = "application/json", produces = "application/json")
    public  void createNewContact(@RequestBody Contact contactTO){
        Contact contact = new Contact();
        contact.setName(contactTO.getName());
        contact.setPhoneNumber(contactTO.getPhoneNumber());
        contact.setCompanyName(contactTO.getCompanyName());
        contact.setSalary(contactTO.getSalary());
        contact.setBirthday(contactTO.getBirthday());

        contactRepository.save(contact);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = "/{contact-id}" , consumes = "application/json")
    public void updateContact(@PathVariable("contact-id") Integer contactId){}

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{contact-id}")
    public void deleteContact(@PathVariable("contact-id") Integer contactId){}

    @GetMapping(produces = "application/json")
    public void listAllContacts(){}

}
