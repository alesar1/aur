# Maintainer: Kris McCleary <kris27mc@gmail.com>

pkgname=minecraft-linux
pkgver=1.0
pkgrel=2
pkgdesc="Minecraft launcher for Linux"
arch=('x86_64')
url="https://kris27mc.github.io"
license=('BSD')
groups=()
depends=('lib32-zlib' 'lib32-ncurses' 'libglvnd' 'gts' 'lib32-libglvnd' 'lib32-libxext' 'lib32-libx11' 'lib32-libpng' 'lib32-util-linux' 'lib32-glibc')
makedepends=('wget' 'cmake' 'gcc-multilib')
optdepends=()
source=("git+https://github.com/kris27mc/minecraft-linux.git")
md5sums=('SKIP')

#pkgver() {
#  cd "$srcdir/minecraft-linux"

#  printf "%s.r%s.%s" \
#   "$(git show -s --format=%ci master | sed 's/\ .*//g;s/-//g')" \
#   "$(git rev-list --count HEAD)" \
#   "$(git rev-parse --short HEAD)"
#         }

build() {
  cd "$srcdir/minecraft-linux"
  #Determines necessary libs
  git checkout ${pkgver} > /dev/null 2>&1
  if grep -qi "amd" /proc/cpuinfo;  then
    /usr/bin/cp -r libs/AMD/* libs
    printf "Using compatibility libs"
    sleep 2
  fi

  #Compiles minecraftlauncher
  cmake .
  make
        }

check() {
  #Checks for complete build
  cd "$srcdir/minecraft-linux"
  if [ ! -e "minecraftlauncher" ]; then
    echo "Error: minecraftlauncher missing. Build failed"
    exit
  fi
        }

package(){
  cd "$srcdir/minecraft-linux"

  #Creates necessary directories
  install -dm777 "$pkgdir/usr/share/applications/"
  install -dm777 "$pkgdir/usr/share/minecraft-linux"
  install -dm777 "$pkgdir/usr/share/licenses/minecraft-linux"
  install -dm777 "$pkgdir/usr/share/minecraft-linux/assets"

  #Moves files to directory
  install -Dm777 "minecraftlauncher" "$pkgdir/usr/share/minecraft-linux"
  install -Dm777 "minecraftlauncher.desktop" "$pkgdir/usr/share/applications"
  install -Dm777 "icon.png" "$pkgdir/usr/share/minecraft-linux"
  install -Dm777 "LICENSE" "$pkgdir/usr/share/licenses/minecraft-linux"
  cp -r "libs" "$pkgdir/usr/share/minecraft-linux"
  chmod -R 777 "$pkgdir/usr/share/minecraft-linux/libs"
  install -Dm777 "extract.sh" "$pkgdir/usr/share/minecraft-linux"

  #Extracts apk
  cd "$srcdir/"
  wget "https://kris27mc.github.io/files/minecraft.apk"
  install -Dm777 "minecraft.apk" "$pkgdir/usr/share/minecraft-linux"
  cd "$pkgdir/usr/share/minecraft-linux"
  ./extract.sh minecraft.apk
          }
