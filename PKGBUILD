# Maintainer: Ali Tajelsir <alitajelsir@gmail.com>
# Contributor:  Antonio Rojas <arojas@archlinux.org>

pkgname=noto-fonts-variable-ar
pkgver=20220406
_commit=c129ad2a857a10a429b20300f82bb90262008c17
pkgrel=1
pkgdesc="Google Noto TTF variable fonts for Arabic Scripts"
arch=(any)
url="https://www.google.com/get/noto/"
license=(custom:SIL)
optdepends=('noto-fonts-emoji: Emoji characters')
_url="https://github.com/googlefonts/noto-fonts/raw/${_commit}"
source=("${_url}"/unhinted/variable-ttf/NotoKufiArabic-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoNaskhArabic-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoNaskhArabicUI-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSansArabic-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSansArabicUI-VF.ttf
        "${_url}"/LICENSE
        70-noto-ar.conf)
sha256sums=('979c3f5deedf862d52ff355ac1f4f048356df213988d116f0fdef6cbf77d2b88'
            '04b2d1843cb5f83bfddace0bdde2696ee4ccafdcdad77419279e1971b6534d9c'
            '3eda34aba1c8fb30f2a9dc8e38c8f183c28efcaf851607e746ef4960bb44cddb'
            'f37d1410cef1c92913cc119e8369f36e6e935b7e38f635774898210c0f9d12ff'
            '5757c1b8e2083ea51e96e70c3755dd5fcf645ef6a987472fea82b0b052082674'
            '0dab92d0544f7b233403f14b84a663bdbfa746982eda629e7f4f9ffe1b036feb'
            'e9eac74b4b261bea372d464e8a04ab225aa2faba0ba1f9e85ab63bf1222e8b8b')

package() {
  install -d "${pkgdir}/usr/share/fonts/TTF"
  install -Dm644 "$srcdir"/*.ttf "$pkgdir/usr/share/fonts/TTF"
  install -Dm644 "$srcdir"/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  # Install fontconfig file (sets Noto Sans Arabic UI as default for ar_AR locale)
  install -Dm644 "$srcdir"/*.conf -t "$pkgdir"/usr/share/fontconfig/conf.avail/
  install -d "$pkgdir"/usr/share/fontconfig/conf.default
  ln -rs "$pkgdir"/usr/share/fontconfig/conf.avail/* "$pkgdir"/usr/share/fontconfig/conf.default
}
