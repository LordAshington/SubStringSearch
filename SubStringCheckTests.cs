using SubStringSearch.Controllers;
using Xunit;

namespace SubStringSearch
{
    public class SubStringCheckTests
    {
        private readonly SubStringCheckController _sut;

        public SubStringCheckTests()
        {
            _sut = new SubStringCheckController();
        }

        [Fact]
        public void EmptyStringShouldFail()
        {
            Assert.Equal("\"Error with one of the text strings, please try again\"", _sut.substringchecker("", ""));
        }

        [Fact]
        public void LongerSubStringShouldFail()
        {
            Assert.Equal("\"Error with one of the text strings, please try again\"", _sut.substringchecker("short", "this is too long"));
        }

        [Fact]
        public void ShouldFailWhenSubstringDoesntExist()
        {
            Assert.Equal("\"Subtext does not appear in Text\"", _sut.substringchecker("this is the text", "xyz"));
        }

        [Fact]
        public void MatchIsCaseInsensitive()
        {
            Assert.Equal("\"Substing starts at text index:0\"", _sut.substringchecker("text", "TEXT"));
        }

        [Fact]
        public void CanMatchMultipleTimes()
        {
            Assert.Equal("\"Substing starts at text index:0, 4, 8\"", _sut.substringchecker("the the the", "the"));
        }

        [Fact]
        public void WhiteSpaceIsTrimmed()
        {
            Assert.Equal("\"Substing starts at text index:0\"", _sut.substringchecker("   the   ", "the"));
        }

        [Fact]
        public void FullStopsShouldWork()
        {
            Assert.Equal("\"Substing starts at text index:0\"", _sut.substringchecker(".", "."));
        }
    }
}
