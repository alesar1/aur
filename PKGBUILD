# Contributor: ordoban <dirk.langer@vvovgonik.de>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-lwp-consolelogger'
pkgver='0.000044'
pkgrel='1'
pkgdesc="LWP tracing and debugging"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-capture-tiny>=0' 'perl-class-method-modifiers>=0' 'perl-data-printer>=0.36' 'perl-datetime>=0' 'perl-html-formattext-withlinks>=0' 'perl-html-restrict>=0' 'perl-http-body>=0' 'perl-http-cookiejar>=0' 'perl-http-cookiemonster>=0' 'perl-http-message>=0' 'perl-http-server-simple-psgi>=0' 'perl-json-maybexs>=1.003005' 'perl-list-allutils>=0' 'perl-log-dispatch>=2.56' 'perl-log-dispatch-array>=0' 'perl-module-runtime>=0' 'perl-moo>=0' 'perl-moox-strictconstructor>=0' 'perl-parse-mime>=0' 'perl-path-tiny>=0' 'perl-plack>=0' 'perl-plack-test-agent>=0' 'perl-ref-util>=0' 'perl-string-trim>=0' 'perl-sub-exporter>=0' 'perl-term-size-any>=0' 'perl-text-simpletable-autowidth>=0.09' 'perl-try-tiny>=0' 'perl-type-tiny>=0' 'perl-uri>=0' 'perl-uri-query>=0' 'perl-www-mechanize>=0' 'perl-xml-simple>=0' 'perl-libwww>=0' 'perl>=5.13.10')
makedepends=()
checkdepends=('perl-test-failwarnings>=0' 'perl-test-fatal>=0' 'perl-test-lwp-useragent>=0' 'perl-test-most>=0')
url='https://metacpan.org/release/LWP-ConsoleLogger'
source=("https://cpan.metacpan.org/authors/id/O/OA/OALDERS/LWP-ConsoleLogger-$pkgver.tar.gz")
md5sums=('c81656c591cd1ecba91a1c537e2c89aa')
sha512sums=('c3685cb15fcc30d8bca121db9953adbb1271725cb1bb9a1f3e84f57741027489e2f0ba34ba9a4a71d8d201591c7dea2024574e44421d9660a21db60396a4daeb')
_distdir="LWP-ConsoleLogger-$pkgver"

build() {
  export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                      \
         PERL_AUTOINSTALL=--skipdeps                            \
         PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
         PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
         MODULEBUILDRC=/dev/null

  cd "$srcdir/$_distdir"
  /usr/bin/perl Makefile.PL
  make
}

check() {
  cd "$srcdir/$_distdir"
  export PERL_MM_USE_DEFAULT=1 PERL5LIB="."
  make test
}

package() {
  cd "$srcdir/$_distdir"
  make install

  find "$pkgdir" \( -name .packlist -o -name perllocal.pod \) -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:
