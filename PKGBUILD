# Maintainer: Vlad M. <vlad@archlinux.net>
# Contributor: Rax Garfield <admin at dvizho.ks.ua>

pkgname=hunspell-uk
pkgver=4.8.0
pkgrel=2
pkgdesc="Ukrainian spelling dictionary"
arch=('any')
url='https://github.com/brown-uk/dict_uk'
license=('MPL')
groups=('dict-uk')
optdepends=('hunspell: the spell checking libraries and apps')
source=("https://github.com/brown-uk/dict_uk/releases/download/v${pkgver}/hunspell-uk_UA_${pkgver}.zip"
	"https://github.com/brown-uk/dict_uk/releases/download/v${pkgver}/chrome_dict_uk-UA-${pkgver}.zip")
sha256sums=('1f6d20dd42611d0fe04c8960d448bb6f7b2d2ea404e8bb91ddbc17650eb69d48'
            '24dabd0ac63dcf12fdbbfc639cc70655c9d89114ec5fe13074a335675a0c716f')

package() {
  install -dm755 "$pkgdir"/usr/share/hunspell
  install -m644 uk_UA.* "$pkgdir"/usr/share/hunspell

  # Install webengine dictionaries
  install -d "$pkgdir"/usr/share/qt/qtwebengine_dictionaries
  install -m644 uk-UA-3-0.bdic "$pkgdir"/usr/share/qt/qtwebengine_dictionaries/uk_UA.bdic

  # myspell symlinks
  install -dm755 ${pkgdir}/usr/share/myspell/dicts
  pushd ${pkgdir}/usr/share/myspell/dicts
    for file in ${pkgdir}/usr/share/hunspell/*; do
      ln -sv /usr/share/hunspell/$(basename ${file}) .
    done
  popd
}
