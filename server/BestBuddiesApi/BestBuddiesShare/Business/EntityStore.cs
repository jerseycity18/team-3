using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;
using BestBuddiesShare.Entities;

namespace BestBuddiesShare.Business
{
    public class EntityStore
    {
        public static readonly EntityStore Instance = new EntityStore();

        private EntityStore()
        {
        }

        public List<Volunteer> GetVolunteers()
        {
            return new List<Volunteer>
            {
                new Volunteer
                {
                    ShirtSize = "M",
                    ContactInfo = new ContactInfo
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Gender = "M",
                        OKToCallWork = true,
                        PrimaryPhone = new Phone
                        {
                            Number = "123-456-7890",
                            Type = "Mobile"
                        },
                        Address = new Address
                        {
                            AddressLine1 = "123 234 Street",
                            City = "New York",
                            State = "NY",
                            Zip = "11111"
                        },
                        Email = "abc@xxxxxyyyy.com"
                    }
                },
                new Volunteer
                {
                    ShirtSize = "S",
                    ContactInfo = new ContactInfo
                    {
                        FirstName = "Jane",
                        LastName = "Doe",
                        Gender = "F",
                        OKToCallWork = true,
                        PrimaryPhone = new Phone
                        {
                            Number = "234-456-7890",
                            Type = "Mobile"
                        },
                        Address = new Address
                        {
                            AddressLine1 = "123 234 Street",
                            City = "New York",
                            State = "NY",
                            Zip = "11111"
                        },
                        Email = "abc@xxxxxyyyy.com"                        
                    },
                    GenderPreference = "F"
                }
            };
        }

        public List<Participant> GetParticipants()
        {
            return new List<Participant>
            {
                
            };
        }

        public List<Interest> GetInterests()
        {
            return new List<Interest>
            {
                new Interest{Description = "Board games", Id = 1},
                new Interest{Description = "Sports", Id = 1},
                new Interest{Description = "Movies", Id = 1},
            };
        }

        public List<MustHave> GetMustHaves()
        {
            return new List<MustHave>
            {
                new MustHave{Description = "Own Transportation", Id = 1},
                new MustHave{Description = "One more pets", Id = 2},
            };
        }
    }
}
