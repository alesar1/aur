pkgname=perl-crypt-des_ede3
pkgver=0.01
pkgrel=1
pkgdesc="Perl module for triple-DES EDE encryption/decryption"
arch=("x86_64" "i686")
url="http://search.cpan.org/~btrott/Crypt-DES_EDE3"
license=("GPL" "PerlArtistic")
depends=('perl-crypt-des')
source=("http://www.cpan.org/authors/id/B/BT/BTROTT/Crypt-DES_EDE3-$pkgver.tar.gz")
md5sums=('fde1995efa0735407a5f7c4a4c8147bc')

build() {
  cd ${srcdir}/Crypt-DES_EDE3-$pkgver
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor || return 1 
  make || return 1
}


package() {
  cd ${srcdir}/Crypt-DES_EDE3-$pkgver
  make pure_install doc_install DESTDIR=${srcdir}/${pkgname} || return 1
  find $startdir/pkg -name '.packlist' -delete
  find $startdir/pkg -name '*.pod' -delete
}
