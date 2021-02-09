# Maintainer: Ulrich Schreiner <ulrich.schreiner@gmail.com>

pkgname=cloudctl-bin
pkgver=0.9.1
pkgrel=1
pkgdesc='A command line tool for FI-TS k8s services'
url='https://github.com/fi-ts/cloudctl'
license=('MIT')
arch=('x86_64')
provides=('cloudctl')
source=("cloudctl-linux-$pkgver-$pkgrel::https://github.com/fi-ts/cloudctl/releases/download/v$pkgver/cloudctl-linux-amd64")
md5sums=('75919afc7617a683de420beebc4535ba')

package() {
    install -Dm 755 "$srcdir/cloudctl-linux-$pkgver-$pkgrel" "$pkgdir/usr/bin/cloudctl"

    # Populate bash, zsh completions
    install -dm 755 "$pkgdir/usr/share/bash-completion/completions"
    install -dm 755 "$pkgdir/usr/share/zsh/site-functions"
    "$pkgdir/usr/bin/cloudctl" completion bash> "$pkgdir/usr/share/bash-completion/completions/cloudctl"
    "$pkgdir/usr/bin/cloudctl" completion zsh>  "$pkgdir/usr/share/zsh/site-functions/_cloudctl"
}
