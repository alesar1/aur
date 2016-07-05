# Maintainer: Miroslav Koskar <http://mkoskar.com/>

pkgname='spring-boot-cli'
pkgver='1.3.6'
_pkgver="$pkgver.RELEASE"
pkgrel=1
pkgdesc='Spring Boot CLI'
url='http://projects.spring.io/spring-boot/'
license=('Apache')
arch=('any')
depends=('java-environment>=6')

source=("https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/$_pkgver/spring-boot-cli-$_pkgver-bin.tar.gz")
md5sums=('f85c5290ba915e076811ace9b84fa488')

package() {
    cd "spring-$_pkgver"

    mkdir -p "$pkgdir/opt/$pkgname"
    cp -a bin lib legal "$pkgdir/opt/$pkgname"
    rm "$pkgdir/opt/$pkgname/bin/spring.bat"

    mkdir -p "$pkgdir/usr/bin"
    ln -s "/opt/$pkgname/bin/spring" "$pkgdir/usr/bin/spring"

    install -D -m 644 shell-completion/bash/spring "$pkgdir/usr/share/bash-completion/completions/spring"
    install -D -m 644 shell-completion/zsh/_spring "$pkgdir/usr/share/zsh/site-functions/_spring"
}
