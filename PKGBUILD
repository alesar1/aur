# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Bruno Dupuis <lisael@lisael.org>
# Contributor: Jan Tojnar <jtojnar@gmail.com>
pkgname=perl-app-sqitch
pkgver=1.0.0
pkgrel=2
pkgdesc='Sane database change management'
_dist=App-Sqitch
arch=('any')
url="http://sqitch.org/"
license=('MIT')
depends=(
    'perl-clone'
    'perl-datetime'
    'perl-datetime-timezone'
    'perl-dbi'
    'perl-devel-stacktrace'
    'perl-encode-locale'
    'perl-file-homedir'
    'perl-hash-merge'
    'perl-libintl-perl'
    'perl-io-pager'
    'perl-ipc-run3'
    'perl-ipc-system-simple'
    'perl-list-moreutils'
    'perl-moo>=1.002000'
    'perl-namespace-autoclean>=0.16'
    'perl-path-class>=0.33'
    'perl-perlio-utf8-strict'
    'perl-string-formatter'
    'perl-string-shellquote'
    'perl-sub-exporter'
    'perl-template-tiny'
    'perl-throwable>=0.200009'
    'perl-try-tiny'
    'perl-type-tiny'
    'perl-type-tiny-xs'
    'perl-uri-db'
    'perl-uri'
    'perl>=5.11.0'
    'perl-module-install'
)

checkdepends=(
    'perl-capture-tiny'
    'perl-test-deep'
    'perl-test-file'
    'perl-test-mockmodule'
    'perl-test-nowarnings'
    'perl-test-dir'
    'perl-test-file-contents'
)

optdepends=(
    'perl-dbd-pg: PostgreSQL support'
    'perl-dbd-sqlite: SQLite support'
    'perl-dbd-mysql: MySQL support'
)

options=('!emptydirs' purge)
source=("http://search.cpan.org/CPAN/authors/id/D/DW/DWHEELER/$_dist-v$pkgver.tar.gz")
sha512sums=('764a17c7cce73f49a789b2ffd2d7d6a3822257f8078710f986110f7136a91f841bd672d9adcbaccb87e8fca6a076d3437243d5601e96d355a37855aa99b25739')

build() {
    cd "$srcdir/$_dist-$pkgver"
    unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
    export PERL_MM_USE_DEFAULT=1 MODULEBUILDRC=/dev/null
    /usr/bin/perl Build.PL
    ./Build
}

check() {
    cd "$srcdir/$_dist-$pkgver"
    unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
    export PERL_MM_USE_DEFAULT=1
    ./Build test
}

package() {
    cd "$srcdir/$_dist-$pkgver"
    unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
    ./Build install --installdirs=vendor --destdir="$pkgdir"
}
