package com.vpn.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ap/v1/contacts")
@CrossOrigin
public class ContactHttpController {

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = "application/json", produces = "application/json")
    public  void createNewContact(){}

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = "/{contact-id}" , consumes = "application/json")
    public void updateContact(@PathVariable("contact-id") Integer contactId){}

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{contact-id}")
    public void deleteContact(@PathVariable("contact-id") Integer contactId){}

    @GetMapping(produces = "application/json")
    public void listAllContacts(){}

}
