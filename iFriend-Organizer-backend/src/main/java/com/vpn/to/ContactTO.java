package com.vpn.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactTO {
    private Long id;
    private String name;
    private String phoneNumber;
    private String companyName;
    private float salary;
    private String birthday;
}
