# CPAN Name  : XML::Compile
# Contributor: Anton Leontiev <scileont /at/ gmail.com>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname=perl-xml-compile
pkgver=1.58
pkgrel=1
pkgdesc='Perl package providing compilation-based XML processing'
arch=('any')
url='https://metacpan.org/release/XML-Compile'
license=('PerlArtistic' 'GPL')
depends=('perl>=5.13.7'
	'perl-log-report>=1.20'
	'perl-types-serialiser'
	'perl-xml-compile-tester>=0.90'
	'perl-xml-libxml>=2.0107')
checkdepends=('perl-test-deep>=0.095')
source=(http://search.cpan.org/CPAN/authors/id/M/MA/MARKOV/XML-Compile-1.58.tar.gz)
options=(!emptydirs)
md5sums=('b92acffd7fb6a50953b5b6ac9a707e8c')

sanitize() {
	unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
	export PERL_MM_USE_DEFAULT=1
}

build() {
	cd XML-Compile-1.58
	sanitize
	perl Makefile.PL INSTALLDIRS=vendor
	make
}

check() {
	cd XML-Compile-1.58
	sanitize
	make test
}

package() {
	cd XML-Compile-1.58
	sanitize
	make install DESTDIR="$pkgdir"
	find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}
