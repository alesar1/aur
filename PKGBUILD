# Maintainer: Harm Endres <harm[DOT]mueller[AT]gmail[DOT]com>
pkgname='perl-rex'
pkgver='1.13.4'
pkgrel='1'
pkgdesc="(R)?ex, the friendly automation framework"
arch=('any')
license=('Apache')
options=('!emptydirs')
depends=(
  'perl-aws-signature4'
  'perl-data-validate-ip'
  'perl-devel-caller'
  'perl-digest-hmac'
  'perl-file-sharedir-install'
  'perl-hash-merge'
  'perl-http-message'
  'perl-io-pty-easy'
  'perl-io-string'
  'perl-json-maybexs'
  'perl-list-moreutils'
  'perl-libwww'
  'perl-net-openssh'
  'perl-net-sftp-foreign'
  'perl-net-ssh2'
  'perl-scalar-list-utils'
  'perl-sort-naturally'
  'perl-term-readkey'
  'perl-test-deep'
  'perl-test-output'
  'perl-test-simple'
  'perl-test-useallmodules'
  'perl-text-glob'
  'perl-uri'
  'perl-xml-simple'
  'perl-yaml')
optdepends=(
  'perl-file-libmagic'
  'perl-string-escape'
  'perl-xml-libxml'
)
makedepends=()
url='https://www.rexify.org/'
source=('https://cpan.metacpan.org/authors/id/F/FE/FERKI/Rex-1.13.4.tar.gz')
md5sums=('a896474bee9c914f57f9139c76d0df58')
sha256sums=('a86e9270159b41c9a8fce96f9ddc97c5caa68167ca4ed33e97908bfce17098cf')
_distdir="Rex-1.13.4"

build()
(
  cd "$srcdir/$_distdir"
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps
  unset PERL5LIB PERL_MM_OPT
  /usr/bin/perl Makefile.PL
  make
)


check()
(
  cd "$srcdir/$_distdir"
  export PERL_MM_USE_DEFAULT=1
  unset PERL5LIB
  make test
)


package()
(
  cd "$srcdir/$_distdir"
  make install INSTALLDIRS=vendor DESTDIR="$pkgdir"
  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
)
