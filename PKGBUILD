# Maintainer: Daniel Haß <aur@hass.onl>
pkgname=standardnotes-desktop
_pkgname=desktop
pkgver=3.4.2
pkgrel=3
pkgdesc="A standard notes app with an un-standard focus on longevity, portability, and privacy."
arch=('x86_64')
url="https://standardnotes.org/"
license=('GPL3')
conflicts=('sn-bin')
depends=('electron')
makedepends=('npm' 'node-gyp' 'git' 'jq')
source=("git://github.com/standardnotes/desktop.git"
        "git://github.com/sn-extensions/extensions-manager.git"
        "git://github.com/sn-extensions/batch-manager.git"
        'standard-notes-web.patch'
        'standardnotes-desktop.desktop'
        'standardnotes-desktop.js')
sha256sums=('SKIP' 'SKIP' 'SKIP'
            '9bf25bd847b9c7fe64f975020b5b890c05e21ae2ab5ad6b9cc50be1d88466197'
            '11e0f47494b09b95710399427f849d5693e97e39e7346469ac82da61138b7ca6'
            '2d90137b689cc38d6c68b17fad2336503846152a0061a91ac2073ea0873a6fc5')

prepare() {
    cd $_pkgname
    git checkout v$pkgver
    git submodule init
    git config submodule.extensions-manager.url $srcdir/extensions-manager
    git config submodule.batch-manager.url $srcdir/batch-manager
    git submodule update
}

build() {
  cd $srcdir/$_pkgname/
  git apply ../standard-notes-web.patch
  # use temporary npm cache - https://wiki.archlinux.org/index.php/Node.js_package_guidelines
  npm install --cache "${srcdir}/npm-cache"
  npm run bundle
  ./node_modules/.bin/electron-builder --linux --x64 --dir $dist
}


package() {

  function remove_srcdir_ref {
    local tmppackage="$(mktemp)"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$1" > "$tmppackage"
    mv "$tmppackage" "$1"
    chmod 644 "$1"
  }

  mkdir -p $pkgdir/opt/$pkgname
  cp -r $srcdir/$_pkgname/app $pkgdir/opt/$pkgname/

  # Remove $srcdir references - https://wiki.archlinux.org/index.php/Node.js_package_guidelines
  for i in $(find "$pkgdir" -name package.json); do
    remove_srcdir_ref $i
  done

  install -D -m644 $pkgname.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 $srcdir/$_pkgname/build/icon/Icon-512x512.png "${pkgdir}/usr/share/icons/standard-notes.png"
  install -D -m655 $pkgname.js "${pkgdir}/usr/bin/${pkgname}"
}
