# Maintainer: Ulrich Schreiner <ulrich.schreiner@gmail.com>

pkgname=cloudctl-bin
pkgver=0.8.5
pkgrel=1
pkgdesc='A command line tool for FI-TS k8s services'
url='https://github.com/fi-ts/cloudctl'
license=('MIT')
arch=('x86_64')
provides=('cloudctl')
source=("https://github.com/fi-ts/cloudctl/releases/download/v$pkgver/cloudctl-linux-amd64")
md5sums=('e983cd96a5e009aca9914c5b3c4d3df2')

package() {
    install -Dm 755 "$srcdir/cloudctl-linux-amd64" "$pkgdir/usr/bin/cloudctl"

    # Populate bash, zsh completions
    install -dm 755 "$pkgdir/usr/share/bash-completion/completions"
    install -dm 755 "$pkgdir/usr/share/zsh/site-functions"
    "$pkgdir/usr/bin/cloudctl" completion > "$pkgdir/usr/share/bash-completion/completions/cloudctl"
    "$pkgdir/usr/bin/cloudctl" zsh-completion >  "$pkgdir/usr/share/zsh/site-functions/_cloudctl"
}
