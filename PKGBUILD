# Maintainer: Maxim Baz <$pkgname at maximbaz dot com>
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=ttf-emojione
pkgver=4.5
pkgrel=1
pkgdesc='Official colorful EmojiOne font'
url='https://github.com/maximbaz/emojione-fonts'
arch=('any')
license=('custom')
depends=('fontconfig')
provides=('emoji-font')
replaces=('emojione-fonts')
install="${pkgname}.install"
source=("emojione-android-${pkgver}.ttf::${url}/releases/download/${pkgver}/emojione-android.ttf"
        '75-emojione.conf'
        "license-free-${pkgver}-${pkgrel}.pdf::https://d1j8pt39hxlh3d.cloudfront.net/license-free.pdf")
sha256sums=('5a8ec97548326235f427dff60749bdbd525de20383c42b1ae73f3bae883f58c2'
            '28a56e95a02135760141d419fa107ce509a3135d05307a2c03ccf4d72d800a79'
            '6b02d2098eb96340e72322e27f0aa1a6ae6546b686d3b6133e1d49597d74eb06')

package() {
    install -Dm644 "emojione-android-${pkgver}.ttf" "${pkgdir}/usr/share/fonts/emojione/emojione.ttf"
    install -Dm644 -t "${pkgdir}/etc/fonts/conf.avail" 75-emojione.conf
    install -Dm644 "license-free-${pkgver}-${pkgrel}.pdf" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.pdf"
}

# vim:set ts=4 sw=4 et:
