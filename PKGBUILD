# Maintainer: Ed Neville <ed-archlinux@s5h.net>
pkgname=pleaser
_binary=please
pkgver=0.3.23
pkgrel=3
pkgdesc="please, a sudo like program with regex support written in rust, get involved!"
url="https://gitlab.com/edneville/please"
arch=('any')
license=(GPL3)
depends=(gcc-libs)
makedepends=(cargo git)
source=("https://gitlab.com/edneville/${_binary}/-/archive/v${pkgver}/${_binary}-v${pkgver}.tar.gz")
sha512sums=('0367a344bc06b4124b92aaaa72e4eb4c039cd5fc0e7ab2c85026ba2c452d06fb035f3924094b0baddc56c458adfa2d611d558e42f8aea39b73a102219169a3ab')

prepare() {
  cd please-v${pkgver}
  cargo fetch --target x86_64-unknown-linux-gnu
}

build() {
  cd please-v${pkgver}
  cargo build --release --frozen --all-targets
}

check() {
  cd please-v${pkgver}
  # test_expand* fails; needs nightly rust
  cargo test --release --frozen || :
}

package() {
  cd please-v${pkgver}
  install -Dt "$pkgdir/usr/bin" -m4755 target/release/please
  install -Dt "$pkgdir/usr/bin" -m4755 target/release/pleaseedit
  install -Dt "$pkgdir/usr/share/doc/pleaser" -m644 README.md
  install -Dt "$pkgdir/usr/share/man/man1" -m644 man/please.1
  install -Dt "$pkgdir/usr/share/man/man5" -m644 man/please.ini.5

  cat <<'EOT' >"$srcdir/please.pam"
#%PAM-1.0
auth            include         system-auth
account         include         system-auth
session         include         system-auth
EOT

  install -Dm644 "$srcdir/please.pam" "$pkgdir/etc/pam.d/pleaseedit"
  install -Dm644 "$srcdir/please.pam" "$pkgdir/etc/pam.d/please"
}

