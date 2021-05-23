# Maintainer: Hans-Nikolai Viessmann <hans at viess dot mn>
# Contributor: XZS <d dot f dot fischer at web dot de>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Rémy Oudompheng <remy@archlinux.org>
# Contributor: Firmicus <francois . archlinux . org>

pkgname=tllocalmgr-git
_pkgname='texlive-localmanager'
pkgver=v0.7.r3.gbbd8488
pkgrel=7
pkgdesc='A shell and command-line utility to manage TeXLive on Arch Linux'
arch=('any')
url='https://git.archlinux.org/users/remy/texlive-localmanager.git/'
license=('GPL')
provides=("texlive-localmanager=$pkgver")
conflicts=('texlive-localmanager'
           'texlive-localmanager-git')
depends=('texlive-core>=2016'
         'texlive-core<2022'
         'perl-libwww'
         'perl-term-shellui'
         'perl-term-readline-gnu'
         'perl-list-moreutils'
         'perl-lwp-protocol-https')
makedepends=('git')

source=("${_pkgname}::git+http://git.archlinux.org/users/remy/texlive-localmanager.git"
        'tllocalmgr-2021.patch'
        'tllocalmgr-enhance.patch'
        'tllocalmgr-fix-texlive-local-match.patch'
        'tllocalmgr-pkgs-nicer-error.patch')
sha256sums=('SKIP'
            'cd12f1927fa9d950855aab91b30039d0cbb328a8c7899382286d3ace16bb6a3b'
            '22222ff329919ee6a16ffd489b0213b14f8169d9daf6ef1a82aa5ab37538c236'
            'a7698d0076f4e1a7ef401899c174ed9a290674a7e89e9c818ba078e17548c6e7'
            '1538426adada826f8faeed826e9be5f5610ade23ce0437535e39662294e6e108')

pkgver() {
  cd "$_pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$_pkgname"

  # update to handle texlive-2021 releases
  patch -p1 < "$srcdir/tllocalmgr-2021.patch"

  # enhances the tllocalmgr script a bit
  # thanks: @sharethewisdom and @cobaltspace
  patch -p1 < "$srcdir/tllocalmgr-enhance.patch"

  # fix missing exclusion of matches for texlive local packages
  # thanks: @CaptainBern
  patch -p1 < "$srcdir/tllocalmgr-fix-texlive-local-match.patch"

  # make error on missing 'pkgs' file non-fatal, improve error msg
  patch -p1 < "$srcdir/tllocalmgr-pkgs-nicer-error.patch"
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
