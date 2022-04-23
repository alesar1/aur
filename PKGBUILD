# Maintainer: bacteriostat <dev.bacteriostat at aleeas dot com>
# Contributor: INhBQfUQO2eFzulN <281587887a at protonmail dot ch>
_pkgname=spotiflyer
pkgname="${_pkgname}-bin"
pkgver=3.6.1
pkgrel=1
pkgdesc="Kotlin multiplatform music downloader, supports Spotify/Gaana/Youtube Music/Jio Saavn."
arch=('x86_64')
url="https://github.com/Shabinder/SpotiFlyer"
license=('GPL3')
depends=("java-runtime")
source=("${_pkgname}-$pkgver.jar::$url/releases/download/v$pkgver/SpotiFlyer-linux-x64-$pkgver.jar"
        "${pkgname}.desktop")
sha256sums=('02bb892b7957beb0100c60907ba4a9820029b64f470fcba15aab923d2b635b8b'
            '824d39c2d43a3f339140dbc3f8af430055a7a07ca324ec140c7be424c2ad90a3')

package() {
  cd "$srcdir"
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 "$srcdir/drawable/${_pkgname}.png" "$pkgdir/usr/share/pixmaps/${_pkgname}.png"
  install -Dm644 "${_pkgname}-$pkgver.jar" "$pkgdir/usr/share/java/${_pkgname}.jar"
  cat << EOF | install -Dm755 /dev/stdin "$pkgdir/usr/bin/${_pkgname}"
#!/bin/sh
exec java -jar /usr/share/java/spotiflyer.jar "\$@"
EOF
}
