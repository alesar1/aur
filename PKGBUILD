# Maintainer: dreieck

_pkgname=idos-timetable-browser
pkgname="${_pkgname}-latest"
epoch=0
pkgver=1.27_lib2.8.0.1
pkgrel=4
pkgdesc="Offline railway and other public transport timetable search engine by CHAPS. (Czech language by default.)"
arch=('i686' 'x86_64')
url="http://chaps.cz/eng/download/idos/zip#kotvaprg"
license=('custom')

groups=(
        "idos-timetable"
       )

depends=(
  "ttf-timetable"
  "wine"
)

makedepends=(
  "unzip"
)

optdepends=(
  "idos-timetable-data: For timetable data. (You need at least one to use the software.)"
  # "idos-timetable-lang: For translations in other languages."
  "idos-timetable-lang-de: For German translation."
  "idos-timetable-lang-en: For English translation."
)

provides=(
  "${_pkgname}=${pkgver}"
  "idos-timetable-lang-cz=${pkgver}"
)

conflicts=("${_pkgname}")

replaces=("${_pkgname}<=${pkgver}")


source=(
  "ttakt.zip::http://ttakt.chaps.cz/TTAktual/Win/Zip/TTAKT.ZIP"
  "idos-timetable-browser.sh"
  "IDOS-Licence.pdf::http://chaps.cz/files/idos/IDOS-Licence.pdf"
  "license-dummy.txt"
  "README.datafiles.txt"
  "ReadMe.cz.txt"
  "ReadMe.en.txt"
  "idos-timetable-browser.install"
)

sha256sums=(
  "SKIP" # "92a47f8947a15bdd3c0fcaac4e21db7d0ae6d9e70cfb9de94e5238081a91a817"
  "969d4418181c9fed180e240c4a73fbfa57e126f77c1c4c6e9217d515a1e6913f"
  "e904d167ccdcfb2743f4cfd596aaa9dce8b751fb5c8315b972b42b7cbb3189e6"
  "c6bb216055d3670d3100b7a74e04ce0644030f365f4349a09e630ef60fbcb9a4"
  "45bf7c462d7154360d0007a6d7c00c6aa6b49339b6f178cf24e5b1a40ca702d7"
  "0ea6e9a36d54a7b9de5b87e9182b40fad0a9f673ae2195c29f32bf4538fa2f76"
  "3a99d362a56fb52d5259549bf932df184e227fae79ed46be60f5b80e5d95c492"
  "670e6a40bade4562fb93c7cb29191c1869c286acbb7f616c8b78f09842a82cbd"
)


pkgver() {
  wget -nv -O- "${url}" | grep 'Timetable browser, version' | head -n 1 | sed -r 's|^.*Timetable browser, version ([0-9\.]+),.*library version ([0-9\.]+).*$|\1_lib\2|g'
}


package() {
  _instdirbase='/opt/idos-timetable'
  _instdir="${pkgdir}/${_instdirbase}"
  _execdir="${pkgdir}/usr/bin"
  install -d -m755 "${_instdir}"

  cd "${_instdir}" && {
    unzip "${srcdir}/ttakt.zip"
    chmod 644 *
    chmod 755 TT.exe
  }

  install -d -m755 "${pkgdir}/usr/share/doc/${_pkgname}"
  echo "${url}" > "${pkgdir}/usr/share/doc/${_pkgname}/info.url"
  chmod 644 "${pkgdir}/usr/share/doc/${_pkgname}/info.url"
  install -D -m644 "${srcdir}/README.datafiles.txt"        "${pkgdir}/usr/share/doc/${_pkgname}/README.datafiles.txt"
  install -D -m644 "${srcdir}/ReadMe.cz.txt"               "${pkgdir}/usr/share/doc/${_pkgname}/ReadMe.cz.txt"
  install -D -m644 "${srcdir}/ReadMe.en.txt"               "${pkgdir}/usr/share/doc/${_pkgname}/ReadMe.en.txt"

  ln -s "/usr/share/doc/${_pkgname}/README.datafiles.txt"  "${_instdir}/README.datafiles.txt"
  ln -s "/usr/share/doc/${_pkgname}/ReadMe.cz.txt"         "${_instdir}/ReadMe.cz.txt"
  ln -s "/usr/share/doc/${_pkgname}/ReadMe.en.txt"         "${_instdir}/ReadMe.en.txt"

  install -D -m644 "${srcdir}/license-dummy.txt"           "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
  install -D -m644 "${srcdir}/IDOS-Licence.pdf"            "${pkgdir}/usr/share/licenses/${pkgname}/IDOS-Licence.pdf"

  install -D -m755 "${srcdir}/idos-timetable-browser.sh"   "${_execdir}/idos-timetable-browser"
}
