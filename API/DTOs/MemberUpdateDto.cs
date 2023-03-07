using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MemberUpdateDto
    {
        public string lookingFor { get; set; }
        public string Interests { get; set; }
        public string Country { get; set; }
    }
}