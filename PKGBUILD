pkgname=crosvm-git
_gitname=crosvm
pkgver=r459.9357ceab
pkgrel=1
pkgdesc="The Chrome OS Virtual Machine Monitor"
url="https://chromium.googlesource.com/chromiumos/platform/crosvm"
depends=('minijail-git' 'gcc-libs')
makedepends=('cargo')
arch=('x86_64')
license=('custom:chromiumos')
source=("git+https://chromium.googlesource.com/chromiumos/platform/crosvm")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_gitname}"
  cargo build --release
}

package() {
  cd "${srcdir}/${_gitname}"
  install -Dm755 target/release/crosvm "$pkgdir/usr/bin/crosvm"
  install -d "$pkgdir/usr/share/policy/crosvm/"
  cp -r seccomp/x86_64/* "$pkgdir/usr/share/policy/crosvm/"
  install -m644 -D LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  install -m644 -D README.md "$pkgdir"/usr/share/licenses/$pkgname/README.md
}
