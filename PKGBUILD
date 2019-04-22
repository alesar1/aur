# Maintainer: dreieck

# PKGBUILD last time manually edited: At least on 2017-12-17.

_pkgname=idos-timetable-maps-chaps-trains-europe
pkgname="${_pkgname}-latest"
epoch=0
pkgver=2019_4_16
pkgrel=1
pkgdesc="Map data for the timetable search engines by CHAPS: European railway."
arch=(any)
url="http://chaps.cz/eng/download/idos/zip#kotvamap"
license=('custom')

groups=(
        "idos-timetable"
       )

depends=(
         "idos-timetable-data-trains"
        )

makedepends=(
  "wget"
)

optdepends=()

provides=(
  "${_pkgname}=${pkgver}"
  
  "idos-timetable-maps=${pkgver}"
  "idos-timetable-maps-trains=${pkgver}"
  
  "idos-timetable-maps-trains-cz=${pkgver}"
  "idos-timetable-maps-trains-sk=${pkgver}"
  "idos-timetable-maps-trains-europe=${pkgver}"
)

conflicts=(
  "${_pkgname}"
  "idos-timetable-maps-chaps-all"
)

_target='vlak_m.zip'

source=(
  "${_target}::http://ttakt.chaps.cz/TTAktual/Win/Zip/VLAK_M.ZIP"
  "IDOS-Licence.pdf::http://chaps.cz/files/idos/IDOS-Licence.pdf"
  "license-dummy.txt"
)

sha256sums=(
  'SKIP'
  "SKIP"
  "c6bb216055d3670d3100b7a74e04ce0644030f365f4349a09e630ef60fbcb9a4"
)

pkgver() {
  wget -nv -O- "${url}" | tr -d '\a' | tr '\n' '\a' | sed  's|^.*File VLAK_M.ZIP\(.*\)Zip/VLAK_M.ZIP.*$|\1\n|g' | tr '\a' '\n' | grep 'Update date:' | cut -d, -f1 | sed -r 's|([0-9]+)\.([0-9]+)\.([0-9]+).|\n\3_\2_\1\n|g' | grep -E '^[0-9]+_[0-9]+_[0-9]+'
}


package() {
  _instdirbase='/opt/idos-timetable'
  _instdir="${pkgdir}/${_instdirbase}"
  install -d -m755 "${_instdir}"

  cp -r "${srcdir}"/Data* "${_instdir}/"
  chmod 755 "${_instdir}"/Data*
  chmod 644 "${_instdir}"/Data*/*

  install -d -m755 "${pkgdir}/usr/share/doc/${_pkgname}"
  echo "${url}" > "${pkgdir}/usr/share/doc/${_pkgname}/info.url"
  chmod 644 "${pkgdir}/usr/share/doc/${_pkgname}/info.url"

  install -D -m644 "${srcdir}/license-dummy.txt" "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
  install -D -m644 "${srcdir}/IDOS-Licence.pdf" "${pkgdir}/usr/share/licenses/${pkgname}/IDOS-Licence.pdf"
}
