# Maintainer: dreieck

_pkgname=idos-timetable-data-chaps-all
pkgname="${_pkgname}-latest"
epoch=0
pkgver=2016_5_10
pkgrel=3
pkgdesc="Timetable data for the timetable search engines by CHAPS: European railway, Czech/Slovak trains + bus, Czech public transport, some air transport. Note that some timetables need the purchased version of IDOS to run."
arch=('i686' 'x86_64')
url="http://chaps.cz/eng/download/idos/zip#kotvatt"
license=('custom')

depends=()

makedepends=(
  "wget"
)

optdepends=()

provides=(
  "${_pkgname}=${pkgver}"
  "idos-timetable-data-sk=${pkgver}"
  "idos-timetable-data-cz=${pkgver}"
  "idos-timetable-data-europe=${pkgver}"
  "idos-timetable-data-cis=${pkgver}"
  "idos-timetable-data=${pkgver}"
)

conflicts=(
  "${_pkgname}"
  # "idos-timetable-data-zsr-sk"
  # "idos-timetable-data-zsr-europe"
)

source=(
  "komplet.zip::http://ttakt.chaps.cz/TTAktual/Win/Zip/KOMPLET.ZIP"
  "IDOS-Licence.pdf::http://chaps.cz/files/idos/IDOS-Licence.pdf"
  "license-dummy.txt"
  "info.url"
)

sha256sums=(
  'SKIP'
  "e904d167ccdcfb2743f4cfd596aaa9dce8b751fb5c8315b972b42b7cbb3189e6"
  "c6bb216055d3670d3100b7a74e04ce0644030f365f4349a09e630ef60fbcb9a4"
  "55e9e7775b70a49642c22dd025a2aa4edcf67b909702ea7bcf8bbd6bc2cf0dca"
)

pkgver() {
  wget -nv -O- "${url}" | tr -d '\a' | tr '\n' '\a' | sed  's|^.*File KOMPLET.ZIP\(.*\)Zip/KOMPLET.ZIP.*$|\1\n|g' | tr '\a' '\n' | grep 'Update date:' | cut -d, -f1 | sed -r 's|([0-9]+)\.([0-9]+)\.([0-9]+).|\n\3_\2_\1\n|g' | grep -E '^[0-9]+_[0-9]+_[0-9]+'
}


package() {
  _instdirbase='/opt/idos-timetable'
  _instdir="${pkgdir}/${_instdirbase}"
  install -d -m755 "${_instdir}"

  cp -r "${srcdir}"/Data* "${_instdir}/"
  chmod 755 "${_instdir}"/Data*
  chmod 644 "${_instdir}"/Data*/*


  install -D -m644 "${srcdir}/info.url" "${pkgdir}/usr/share/doc/${_pkgname}/info.url"

  install -D -m644 "${srcdir}/license-dummy.txt" "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
  install -D -m644 "${srcdir}/IDOS-Licence.pdf" "${pkgdir}/usr/share/licenses/${pkgname}/IDOS-Licence.pdf"
}
