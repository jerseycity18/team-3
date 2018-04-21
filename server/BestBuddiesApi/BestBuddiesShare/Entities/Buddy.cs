using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BestBuddiesShare.Entities
{
    public class MustHave
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }
    public class Interest
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }

    public class Participant: Buddy
    {
        public string SpecialNeeds { get; set; }
    }

    public class Volunteer: Buddy
    {
        public string GenderPreference { get; set; }
    }

    public class Buddy
    {
        public ContactInfo ContactInfo { get; set; }
        public ContactInfo EmergencyContactInfo { get; set; }
        public string ShirtSize { get; set; }
        public IList<Interest> Interests { get; set; }
        public IList<MustHave> MustHaves { get; set; }
    }

    public class ContactInfo
    {
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Middle { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public Address Address { get; set; }
        public Phone PrimaryPhone { get; set; }
        public Phone AltPhone1 { get; set; }
        public Phone AltPhone2 { get; set; }
        public bool OKToCallWork { get; set; }
    }

    public class Address
    {
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string State { get; set; }
    }

    public class Phone
    {
        public string Type { get; set; }
        public string Number { get; set; }
    }
}
