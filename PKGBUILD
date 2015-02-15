# CPAN Name  : Test::Class
# Contributor: Anton Leontiev <bunder /at/ t-25.ru>
# Generator  : CPANPLUS::Dist::Arch 1.28

pkgname=perl-test-class
pkgver=0.40
pkgrel=1
pkgdesc='Perl module to easily create test classes in an xUnit/JUnit style'
arch=('any')
url='http://search.cpan.org/dist/Test-Class'
license=('GPL')
options=(!emptydirs)
depends=('perl>=5.8.9'
	'perl-attribute-handlers>=0.77'
	'perl-mro-compat>=0.11')
makedepends=('perl-extutils-pkgconfig')
checkdepends=('perl-test-exception' 'perl-test-most')
source=(http://search.cpan.org/CPAN/authors/id/R/RJ/RJBS/Test-Class-0.40.tar.gz)
md5sums=('22e4387daec4117c8a56767790059951')

build() {
	cd Test-Class-0.40
	PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
	make
}

check() {
	cd Test-Class-0.40
	make test
}

package() {
	cd Test-Class-0.40
	make install DESTDIR="$pkgdir"
	find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}
