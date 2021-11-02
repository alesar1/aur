# Contributor: Rafael Silva <perigoso@riseup.net>
# Contributor: Dan Beste <drb@wishalloy.io>

pkgname='gog-stardew-valley'
pkgver=1.4.5
pkgrel=1
# Fix upstream versioning shenanigans:
epoch=1
pkgdesc="You’ve inherited your grandfather’s old farm plot in Stardew Valley.
Armed with hand-me-down tools and a few coins, you set out to begin your new
life."
url='http://stardewvalley.net/'
license=('custom')
arch=('x86_64')
source=(
  "${pkgname}"
  "${pkgname}.desktop"
  'local:///stardew_valley_1_5_4_1396293314_48235.sh'
  'StardewValley'
)
sha256sums=(
  '9f51b56b351824493c381731f29175b0897fa0dc4169a9b9160b5a12003883dc'
  'ca0fe151f73f5e8b594b226e1b0539655a2d95a7848eb0e43961cb6daa0de2ff'
  'a3716bd7e3f3419e1ce28abc047b7a07153826d9a17a60dab1901ff1572ec816'
  '0c6826084d72917748e54f9308b7395f8d3780b4a745860839203e2af428d202'
)

package() {
  install -d "${pkgdir}/opt/${pkgname}/"
  install -d "${pkgdir}/opt/${pkgname}/support/yad/64"
  install -d "${pkgdir}/usr/bin/"
  install -d "${pkgdir}/usr/share/applications/"
  install -d "${pkgdir}/usr/share/licenses/${pkgname}/"
  install -d "${pkgdir}/usr/share/pixmaps/"

  cp -r data/noarch/game "${pkgdir}/opt/${pkgname}/"
  find "${pkgdir}/opt/${pkgname}" -type d -exec chmod 755 {} \;

  install -m 755           \
    "${srcdir}/${pkgname}" \
    "${pkgdir}/usr/bin/${pkgname}"
  install -m 755         \
    data/noarch/start.sh \
    "${pkgdir}/opt/${pkgname}/"
  install -m 755                     \
    data/noarch/support/*.{sh,shlib} \
    "${pkgdir}/opt/${pkgname}/support/"
  install -m 755                     \
    'data/noarch/support/yad/yad.sh' \
    "${pkgdir}/opt/${pkgname}/support/yad/"
  install -m 755                     \
    'data/noarch/support/yad/64/yad' \
    "${pkgdir}/opt/${pkgname}/support/yad/64/"
  install -m 644                                      \
    'data/noarch/docs/End User License Agreement.txt' \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -m 644                   \
    "data/noarch/support/icon.png" \
    "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -m 644                   \
    "${srcdir}/${pkgname}.desktop" \
    "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  # Workarounds for upstream silliness:
  cd "${pkgdir}/opt/gog-stardew-valley/game"
  # Unless i686 is requested, I am only going to support machine architectures
  # that I can test with:
  ln -s mcs.bin.x86_64 mcs
  # Simplified "bootstrapping" script:
  install -m 755 "${srcdir}/StardewValley" StardewValley
}

# vim: ts=2 sw=2 et:
