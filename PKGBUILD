# Maintainer: Felix Golatofski <contact@xdfr.de>
# https://github.com/rvm/rvm/

pkgname=rvm
pkgbase=${pkgname}
pkgver=1.29.10
pkgrel=1
pkgdesc='RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems.'
arch=('any')
url="https://rvm.io/"
license=('Apache License')
depends=('gdbm' 'openssl'  'libffi'  'libyaml'  'gmp'  'zlib')
provides=('rvm' 'ruby')
conflicts=('ruby')
source=("https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer"
        "rvm_init.sh"
        "rvm.sh"
        "rvmrc")
sha256sums=('fea24461e98d41528d6e28684aa4c216dbe903869bc3fcdb3493b6518fae2e7e'
            'f09f9a144a3d33409c1f394d7ba37f783b8034fbd6405e8536bf9bfec87c6af0'
            '48b6e852380c9e9b8d3b3c3ce8e50d397429dd1efeee06a75e121df1a2df47e2'
            'f9444e8c5817c4a59fc701b8a71cef0a7114a9dda549ad82c5800983f1a54738')

build() {
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
  chmod +x rvm-installer
  ./rvm-installer --path $srcdir/rvm --ignore-dotfiles --version ${pkgver}
}

package() {
  cd "$srcdir"
  DESTDIR="$pkgdir/usr/share"
  DESTETC="$pkgdir/etc"
  mkdir -p "$DESTDIR"
	cp -r "rvm" "$DESTDIR/"
  mkdir -p "$DESTETC/profile.d"
  cp rvm_init.sh "$DESTETC/profile.d/"
#  cp rvm.sh "$DESTETC/profile.d/"
  cp rvmrc "$DESTETC/"
  mkdir -p "$DESTETC/skel/.rvm"
  cd "$DESTETC/skel/.rvm"
  mkdir archives  bin  environments  gems  gems_cache  hooks  log  pkgs  repos  rubies  rubygems  src  tmp  user  wrappers
}
