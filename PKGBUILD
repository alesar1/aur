
# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://whisparr.servarr.com/v1/update/nightly?version=0.0.0.0&os=linux&runtime=netcore&arch=x64

pkgname="whisparr-nightly"
pkgver=0.1.0.27
pkgrel=1
pkgdesc="Porn download automation for usenet and torrents."
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/Whisparr/Whisparr"
license=('GPL3')
options=('!strip' 'staticlibs')
depends=('sqlite')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'qbittorrent: torrent downloader'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'transmission: torrent downloader'
            'jackett: torrent indexer proxy'
            'libgdiplus: provides a gdi+ compatible api')

provides=('whisparr')
conflicts=('whisparr')

source_x86_64=("Whisparr.nightly.${pkgver}.linux-core-x64.tar.gz::https://whisparr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=x64") 
source_aarch64=("Whisparr.nightly.${pkgver}.linux-core-arm64.tar.gz::https://whisparr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm64") 
source_armv7h=("Whisparr.nightly.${pkgver}.linux-core-arm.tar.gz::https://whisparr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm")

source=('whisparr.service'
        'whisparr.tmpfiles'
        'whisparr.sysusers'
        'package_info')

sha512sums=('9d339f083fac209ad19b00b072c4863e608b9d88074eeb572b9f8de5d46facfdaf5893835eb3169dbcff7adb2a8411780f5149830f68fe769119d9533b67add8'
            '86bf3eeed370680eae5ccad9be0caa1fa271461daca0d36c99b6b1a11a4e57a507e664e48ac27c454dea891db04a09766c76899169c335aa386ee90972cd6108'
            'f938315fb803eb25fdf68cc9fbf6cda91589d20e0f41cafb5d6bb319a7642385a183b030e529ca194bac0e7f0ebb6aa992bd5ae18ec802ae6246dfe6cfcfc99d'
            'd63e53264055e7281a0befaa9165f7651ecc2cf105787cc47b551ad4d412dfaa90c03a75d20108e87e0b4975655941a2823aaf22c50083e2250a2cb0a5db0491')
sha512sums_x86_64=('aa1fe10049be538f13eb9e11314f38364c0938ebbffe99d5ac7ec845c84d0566ca1377a92889d3978bde83332e674e0b8878fca8f8c9fd1d8ea10583c59fc86d')
sha512sums_aarch64=('c6459698144602b807e7fe43ec9344dfc9fafe9f9c81795aaab814af62056283220aea3f4ff0a126a7146a20713488833b36c47ebe5d5a9bce4c5ce87a1a5521')
sha512sums_armv7h=('623d144587f4092a8c442cb248c3a855ff530ccf0b1f859c80ae89acd696e1734ac1c5747443021489729dce6c43dfa41b2606815223bdaec9c426280db19c48')


package() {
  rm -rf "${srcdir}/Whisparr/Whisparr.Update"
  install -d -m 755 "${pkgdir}/usr/lib/whisparr/bin"
  cp -dpr --no-preserve=ownership "${srcdir}/Whisparr/"* "${pkgdir}/usr/lib/whisparr/bin"
  chmod -R a=,a+rX,u+w "${pkgdir}/usr/lib/whisparr/bin"
  chmod +x "${pkgdir}/usr/lib/whisparr/bin/Whisparr" "${pkgdir}/usr/lib/whisparr/bin/ffprobe"

  # Disable built in updater.
  install -D -m 644 "${srcdir}/package_info" "${pkgdir}/usr/lib/whisparr"
  echo "PackageVersion=${pkgver}-${pkgrel}" >> "${pkgdir}/usr/lib/whisparr/package_info"

  install -D -m 644 "${srcdir}/whisparr.service" "${pkgdir}/usr/lib/systemd/system/whisparr.service"
  install -D -m 644 "${srcdir}/whisparr.sysusers" "${pkgdir}/usr/lib/sysusers.d/whisparr.conf"
  install -D -m 644 "${srcdir}/whisparr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/whisparr.conf"
}
