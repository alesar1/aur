# Maintainer: Storm Dragon <storm_dragon@linux-a11y.org>
# Maintainer: Michael Taboada <michael@2mb.solutions>
                                                                                                                                                                
pkgname="barnard-git"
pkgver=r54.22ea624
pkgrel=1
epoch=1
pkgdesc="A command line mumble client."
arch=('aarch64' 'armv7h' 'x86_64')
url="https://github.com/bmmcginty/barnard"
license=('GPL2')
depends=('openal' 'opus')
makedepends=('git' 'go-pie')
source=("barnard::git+https://github.com/bmmcginty/barnard.git")
sha512sums=('SKIP')

  prepare(){
      mkdir -p gopath/src/github.com/bmmcginty
        ln -rTsf barnard gopath/src/github.com/bmmcginty/barnard
    export GOPATH="${srcdir}/gopath"
  cd gopath/src/github.com/bmmcginty/barnard
    go get -v -d
              }

pkgver() {
    cd "${srcdir}/barnard"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  export GOPATH="${srcdir}/gopath"
  cd "${srcdir}/gopath/src/github.com/bmmcginty/barnard"
  go install \
    -gcflags "all=-trimpath=$GOPATH" \
    -asmflags "all=-trimpath=$GOPATH" \
    -ldflags "-extldflags $LDFLAGS" -v
}
                                                                                                                                                                
package() {
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/doc/barnard"
  install -p -m755 "$srcdir/gopath/bin/barnard" "$pkgdir/usr/bin"
  install -p -m644 "$srcdir/barnard/README.md" "$pkgdir/usr/share/doc/barnard"
                                                                                                                                                                
  #mkdir -p "$pkgdir/$GOPATH"
  #cp -Rv --preserve=timestamps "$srcdir/"{src,pkg} "$pkgdir/$GOPATH"
                                                                                                                                                                
}
                                                                                                                                                                
# vim:set ts=2 sw=2 et:
