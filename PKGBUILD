# Maintainer: Dominik Fischer <d dot f dot fischer at web dot de>
pkgname=pkgrepotools-git
pkgver=r0
pkgrel=1
# Do not try to track version changes with git. The version generated by the pkgver
# function in the git template will in turn reference the commit hash, so commiting
# a version change will change the version, which is an unbreakable race condition.
pkgdesc="builds and distributes packages expanding templates off-file"
arch=('any')
url="https://github.com/dffischer/pkgrepotools"
license=('GPL')
depends=('bash' 'sed')
makedepends=('ruby-ronn')
optdepends=('pacman: for makepkg-expanded'
            'git: for offbranch, aurbranch and aurremote'
            'pkgbuild-introspection: to run aurbranch without a .SRCINFO argument')
replaces=('makepkg-expanded')

makedepends+=('git')
source+=("${_gitname:=${pkgname%-git}}::${_giturl:-git+$url}")
md5sums+=('SKIP')
provides+=($_gitname)
conflicts+=($_gitname)
pkgver() {
  cd ${_gitname:-$pkgname}
  git describe --long --tags 2>/dev/null | sed 's/[^[:digit:]]*\(.\+\)-\([[:digit:]]\+\)-g\([[:xdigit:]]\{7\}\)/\1.r\2.g\3/;t;q1'
  [ ${PIPESTATUS[0]} -ne 0 ] && \
printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

find_executables() {
  cd $_gitname
  executables=($(find -mindepth 1 -maxdepth 1 -executable -type f))
  executables=("${executables[@]#./}")
}

build() {
  find_executables
  ronn --roff ${executables[@]/%/.md}
}

package() {
  find_executables

  install -Dt "$pkgdir/usr/bin" ${executables[@]}
  install -Dm644 -t "$pkgdir/usr/share/man/man1" *.1

  IFS=: eval 'GLOBIGNORE="${executables[*]/%/.md}"'
  install -Dm655 -t "$pkgdir/usr/share/doc/${pkgname%-git}" *.md
}
