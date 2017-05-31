#@IgnoreInspection BashAddShebang
# Maintainer: Cooper Paul EdenDay <cedenday@protonmail.com>
pkgname=rshare
pkgver=0.1.7
pkgrel=1
pkgdesc='A file sharing program written in Rust.'
arch=('x86_64')
url='https://github.com/cedenday/rshare'
license=('GPL3')
source=("https://github.com/cedenday/rshare/releases/download/v$pkgver/rshare-v$pkgver-$CARCH-unknown-linux-musl"{,.asc})
validpgpkeys=('BDB3F8A842A1656CC10B5CD9EE3B8B8C88FC7275')
sha256sums=('021b665d9b1bc47e97cd86d4d4620d3b671c9a7d14e1f2c388dcac23c0a868ad'
            'SKIP')

build() {
    chmod +x "$pkgname-v$pkgver-$CARCH-unknown-linux-musl"

    ./$pkgname-v$pkgver-$CARCH-unknown-linux-musl completions bash > "$pkgname.bash-completion"
    ./$pkgname-v$pkgver-$CARCH-unknown-linux-musl completions zsh > "_$pkgname"
    ./$pkgname-v$pkgver-$CARCH-unknown-linux-musl completions fish > "$pkgname.fish"
}

package() {
    install -Dm755 "$pkgname-v$pkgver-$CARCH-unknown-linux-musl" "$pkgdir/usr/bin/$pkgname"

    install -Dm644 "$pkgname.bash-completion" "$pkgdir/usr/share/bash-completion/completions/$pkgname"
    install -Dm644 "_$pkgname" "$pkgdir/usr/share/zsh/site-functions/_$pkgname"
    install -Dm644 "$pkgname.fish" "$pkgdir/usr/share/fish/completions/$pkgname.fish"
}
