# Maintainer:  Tim Schumacher <timschumi@gmx.de>
# Contributor: KillWolfVlad <github.com/KillWolfVlad>
# Contributor: WaveHack <email@wavehack.net>
# Contributor: Whovian9369 <Whovian9369@gmail.com>

pkgname=gitahead-bin
pkgrel=1
pkgver=2.6.2
pkgdesc='Understand your Git history!'
url='http://gitahead.scitools.com/'
arch=('x86_64')
license=('custom')
depends=('curl')
provides=('gitahead')
conflicts=('gitahead')
source=(
  "gitahead-${pkgver}.bin::https://github.com/gitahead/gitahead/releases/download/v${pkgver}/GitAhead-${pkgver}.sh"
  "gitahead-license"
  "gitahead.desktop"
  "gitahead.png"
  "gitahead.sh"
)
sha256sums=('c3975b83d2f8bb871047dea3f7ed100fe1170dd5ba70153ee52bef2e18571497'
            'd71bfb48c954d213986816fc29478c7f80c8bd2dd10d2889bf51897d649eedd6'
            'c0e78c099eccbc9219efc9364f2c79fb02e39cf71121670cf6504a35dbc05ce6'
            '66cb53fc57eb2ce2e6cd02ff392476fdfb91b723b76ef5da1856e9b5dc1b5c75'
            'ba4e21c675ce7f49e6df27df1f29d1bb99c47679c4981657a2a4cf5d59930b4a')

prepare() {
  gzip_offset=$(grep -baoU -m 1 "$(printf '\x1f\x8b')" gitahead-${pkgver}.bin | awk '{print $1}' FS=':')

  if [ -z "${gzip_offset}" ]; then
    echo "error: No GZip header found"
    return 1
  fi

  dd if=gitahead-${pkgver}.bin of=gitahead-${pkgver}.tar.gz iflag=skip_bytes skip=${gzip_offset} 2> /dev/null
  mkdir -p gitahead-${pkgver}
  bsdtar xf gitahead-${pkgver}.tar.gz -C gitahead-${pkgver}
}

package() {
  install -d "${pkgdir}/opt"
  cp -R "${srcdir}/gitahead-${pkgver}" "${pkgdir}/opt/gitahead"

  find "${pkgdir}/opt/gitahead/" -type f -exec chmod 644 {} \;
  chmod 755 "${pkgdir}/opt/gitahead/GitAhead"
  chmod 755 "${pkgdir}/opt/gitahead/indexer"
  chmod 755 "${pkgdir}/opt/gitahead/relauncher"

  install -D -m644 "${srcdir}/gitahead-license" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m755 "${srcdir}/gitahead.sh" "${pkgdir}/usr/bin/gitahead"
  install -D -m644 "${srcdir}/gitahead.desktop" "${pkgdir}/usr/share/applications/gitahead.desktop"
  install -D -m644 "${srcdir}/gitahead.png" "${pkgdir}/usr/share/pixmaps/gitahead.png"
}
