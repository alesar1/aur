# Maintainer: Philip Wellnitz

pkgname=powerline-i3-git
_pkgname=powerline
pkgver=1.7.16.10
pkgrel=2
pkgdesc="The ultimate statusline/prompt utility. A fork containing more features for the i3 window manager."
arch=('i686' 'x86_64')
url="https://github.com/ph111p/powerline"
license=('MIT')
depends=(
  'python'
  'powerline-fonts'
  'ttf-font-awesome-4'
  'lemonbar'
  'i3ipc-python-git'
  'python-xlib'
)
optdepends=(
  'python-dbus: player segments using dbus'
  'python-iwlib: wireless segment'
  'python-pyalsaaudio: volume segment'
  'python-psutil: cpu load segment'
  'python-pygit2: better git performance of the vcs segment'
  'python-google-api-python-client: Google Calendar support for the appoints segment'
  'xorg-xinput: screen rotation segment'
)
makedepends=(
  'python-setuptools'
)
provides=('powerline-i3')
conflicts=('powerline' 'python-powerline')

source=("git://github.com/ph111p/powerline.git#branch=develop")
sha512sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
    echo $(git describe --abbrev=0 --tags).$(git rev-list --count $(git describe --abbrev=0 --tags)..HEAD)
}

package() {
    cd powerline

    python setup.py install --root="${pkgdir}" --optimize=1

    echo ">>> To use powerline instead of i3bar, replace"
    echo ">>>   bar {"
    echo ">>>      status_command i3status"
    echo ">>>   }"
    echo ">>> in your i3/config with this line:"
    echo ">>> exec_always \"killall powerline-lemonbar; powerline-lemonbar --i3 --height 16 -- -a 40 -b -f \'DejaVu Sans Mono-11\' -f \'PowerlineSymbols-12\' -f \'FontAwesome-11\'\""
}
