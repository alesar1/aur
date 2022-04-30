# Maintainer: Hans-Nikolai Viessmann <hans at viess dot mn>
# Contributor: XZS <d dot f dot fischer at web dot de>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Rémy Oudompheng <remy@archlinux.org>
# Contributor: Firmicus <francois . archlinux . org>

pkgname=tllocalmgr-git
_pkgname='texlive-localmanager'
pkgver=r84.bbd8488
pkgrel=5
pkgdesc='A shell and command-line utility to manage TeXLive on Arch Linux'
arch=('any')
url='https://gitlab.archlinux.org/remy/texlive-localmanager.git'
license=('GPL')
provides=("texlive-localmanager=$pkgver")
conflicts=('texlive-localmanager'
           'texlive-localmanager-git')
depends=('texlive-core>=2016'
         'texlive-core<2023'
         'perl-libwww'
         'perl-term-shellui'
         'perl-term-readline-gnu'
         'perl-list-moreutils'
         'perl-lwp-protocol-https')
makedepends=('git')

source=("${_pkgname}::git+https://gitlab.archlinux.org/remy/texlive-localmanager.git"
        'tllocalmgr-2022.patch'
        'tllocalmgr-enhance.patch'
        'tllocalmgr-fix-texlive-local-match.patch'
        'tllocalmgr-pkgs-nicer-error.patch'
        'tllocalmgr-mirror-opt.patch'
        'tllocalmgr-better-conflicts.patch')
sha256sums=('SKIP'
            '7eb0982890b2d4de29d391db59dd4a8c6308bca2327433f08da265bf69ca71ca'
            '22222ff329919ee6a16ffd489b0213b14f8169d9daf6ef1a82aa5ab37538c236'
            'a7698d0076f4e1a7ef401899c174ed9a290674a7e89e9c818ba078e17548c6e7'
            '23f103c606eb595d8c114aee2ca3006a09588370087b959419f86a4a8ce25a43'
            'd7064657f6336bed7be230fc05df800e6bdcee31d10c718b4b9b1b55f7f26c8a'
            '380cdb0dd8531dcab13b8da70506214bccb7252ddd19ad50a5be25fac3b39ea2')

pkgver() {
  cd "$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "$_pkgname"

  # update to handle texlive-2022 releases
  patch -p1 < "$srcdir/tllocalmgr-2022.patch"

  # enhances the tllocalmgr script a bit
  # thanks: @sharethewisdom and @cobaltspace
  patch -p1 < "$srcdir/tllocalmgr-enhance.patch"

  # fix missing exclusion of matches for texlive local packages
  # thanks: @CaptainBern
  patch -p1 < "$srcdir/tllocalmgr-fix-texlive-local-match.patch"

  # make error on missing 'pkgs' file non-fatal, improve error msg
  patch -p1 < "$srcdir/tllocalmgr-pkgs-nicer-error.patch"

  # correctly pass --mirror option
  patch -p1 < "$srcdir/tllocalmgr-mirror-opt.patch"

  # some CTAN packages are not in any texlive collection, so there is
  # no need to set a conflict within PKGBUILD
  patch -p1 < "$srcdir/tllocalmgr-better-conflicts.patch"
}

package() {
  cd "$_pkgname"
  install -d "$pkgdir/usr/"{bin,share/texmf/arch/tlpkg/TeXLive}
  install -m755 tllocalmgr "$pkgdir/usr/bin/"
  cd tlpkg/TeXLive
  for _f in *; do
    install -m644 "$_f" "$pkgdir/usr/share/texmf/arch/tlpkg/TeXLive/"
  done
}
