# Maintainer: maintuner <zackmelan>
pkgname=outline-client-appimage-git
pkgver=1.8.0
pkgrel=1
pkgdesc="The Outline clients use the popular Shadowsocks protocol, and lean on the Cordova and Electron frameworks."
arch=(x86_64)
conflicts=('outline-client-appimage' 'outline-client-appimage-wayland' 'outline-client-appimage-git')
license=("Apache License 2.0")
url="https://github.com/Jigsaw-Code/outline-releases"


#Outline-Client.AppImage::https://s3.amazonaws.com/outline-releases/client/linux/1.8.0/3/Outline-Client.AppImage"

makedepends=('awk' 'curl')

source=("latest-linux.yml::https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/client/latest-linux.yml"
        "outline-client16.png"
        "outline-client24.png"
        "outline-client32.png"
        "outline-client48.png"
        "outline-client64.png"
        "outline-client128.png"
        "outline-client256.png"
        "outline-client512.png"
        "outline-client1024.png"
        "outline-client.desktop")

md5sums=('SKIP'
         '0a93de3e384697183c80dd8f2d9a7d4c'
         '1119ddab3f312c7c8a6411f9fb345f18'
         'a7fbc709d197494b461f2afb7841249e'
         'a20ea1af78233b243d90dbe01dd27643'
         '53b7d75055b50fb1019b37e25401497f'
         '21ee59b03e158af113129ee853bf5f06'
         '15a01c4029650763d83d60945e57b82e'
         '328166288c74442b1d58d576dbe951df'
         '7656cda27d6a687fc29bc579102b5a55'
         'f43daa4f68f52bb7c88fd9ae19f358f1')

options=('!strip')

prepare() {
        OUTLINE_CLIENT="Outline-Client.AppImage"
	DOWNLOAD_URL=$(awk '/path:/ {print $2}' latest-linux.yml)
        VERSION=$(awk '/version:/ {print $2}' latest-linux.yml)
        echo "Found version ($VERSION)"
	echo "Downloading '$OUTLINE_CLIENT' ver $VERSION from '$DOWNLOAD_URL'"
        curl $DOWNLOAD_URL -o $OUTLINE_CLIENT
}

package() {
  install -Dm755 "${srcdir}/Outline-Client.AppImage" "${pkgdir}/opt/outline-client/Outline-Client.AppImage"
  install -Dm644 "${srcdir}/outline-client.desktop" "${pkgdir}/usr/share/applications/outline-client.desktop"
  install -Dm644 "${srcdir}/outline-client16.png" "${pkgdir}/usr/share/icons/hicolor/16x16/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client24.png" "${pkgdir}/usr/share/icons/hicolor/24x24/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client32.png" "${pkgdir}/usr/share/icons/hicolor/32x32/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client48.png" "${pkgdir}/usr/share/icons/hicolor/48x48/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client64.png" "${pkgdir}/usr/share/icons/hicolor/64x64/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client128.png" "${pkgdir}/usr/share/icons/hicolor/128x128/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client256.png" "${pkgdir}/usr/share/icons/hicolor/256x256/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client512.png" "${pkgdir}/usr/share/icons/hicolor/512x512/apps/outline-client.png"
  install -Dm644 "${srcdir}/outline-client1024.png" "${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/outline-client.png"
  mkdir -p "${pkgdir}/usr/bin/"
  ln -s "/opt/outline-client/Outline-Client.AppImage" "${pkgdir}/usr/bin/outline-client"
}