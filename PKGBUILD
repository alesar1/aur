# Maintainer: Jan Cholasta <grubber at grubber cz>

pkgname=acc
pkgver=1.56
pkgrel=1
pkgdesc='ACS script compiler for use with ZDoom and/or Hexen'
arch=('i686' 'x86_64')
url='https://github.com/rheit/acc'
license=('custom:EULA')
depends=('glibc')
source=("http://zdoom.org/files/utils/acc/acc${pkgver//./}-src.zip"
        'http://www.doomworld.com/eternity/activision_eula.txt')
sha256sums=('63aea643b9105cb156fb77f696c8236d9c08317a753d8dee96f29510b0401909'
            'd1dd96235e883c638e202715039946fac58f2979e1f11cb2bbe2a24eefb5fe9a')

prepare() {
    cd acc-${pkgver}

    sed -ri "s|/usr/local/share/acc|/usr/share/acc|" acc.c
}

build() {
    cd acc-${pkgver}

    make
}

package() {
    cd acc-${pkgver}

    install -d "$pkgdir"/usr/bin/ \
               "$pkgdir"/usr/share/acc/ \
               "$pkgdir"/usr/share/licenses/$pkgname/

    install acc "$pkgdir"/usr/bin/

    install -m644 zcommon.acs "$pkgdir"/usr/share/acc/
    install -m644 zdefs.acs "$pkgdir"/usr/share/acc/
    install -m644 zspecial.acs "$pkgdir"/usr/share/acc/
    install -m644 zwvars.acs "$pkgdir"/usr/share/acc/

    install -m644 "$srcdir"/activision_eula.txt \
                  "$pkgdir"/usr/share/licenses/$pkgname/
}
