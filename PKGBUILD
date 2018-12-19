# Author: rko <raymond.w.ko@gmail.com>
pkgname=ogremeshy-hg
pkgver=r49.15c39553d143
pkgrel=1
pkgdesc="Ogre Meshy is a tool for viewing OGRE mesh files."
arch=('i686' 'x86_64')
url="http://www.yosoygames.com.ar/wp/ogre-meshy/"
license=('GLPv3')
depends=('ogre' 'wxgtk2' 'nvidia-cg-toolkit')
makedepends=('cmake' 'mercurial')
provides=('ogremeshy')
conflicts=('ogremeshy')
source=("hg+https://bitbucket.org/dark_sylinc/ogremeshy")
sha1sums=('SKIP')

# change this if you need a debug build or similar
CMAKE_CONFIGURATION="Release"

# TODO for any future maintainers
# bascailly make CMake detect Ogre properly in the installed directory. Right
# now I have to manually set directories and create a plugin file, when in
# reality it should be auto-generated by CMake

pkgver() {
    cd "${pkgname%-hg}"
    printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

build() {
    mkdir -p "$srcdir/build"
    cd "$srcdir/build"

    cmake \
        -D CMAKE_BUILD_TYPE=$CMAKE_CONFIGURATION \
        -D CMAKE_CXX_FLAGS="-I/usr/include/OGRE -I /usr/include/OGRE/Overlay -I /usr/include/OGRE/Bites" \
        -D OGRE_PLUGIN_DIR="/usr/lib/OGRE/" \
        -D OGRE_BUILD_COMPONENT_BITES=TRUE \
        -D CMAKE_EXE_LINKER_FLAGS="-lboost_system" \
        "$srcdir/${pkgname%-hg}"
    make VERBOSE=1
}

package() {
    DST="$pkgdir/usr/lib/ogremeshy"
    mkdir -p "$DST"
    cd "${pkgname%-hg}/bin/$CMAKE_CONFIGURATION"
    cp -r * "$DST"
    
    mkdir "$pkgdir/usr/bin"
    cd "$pkgdir/usr/bin"
    ln -s ../lib/ogremeshy/OgreMeshy
    
    cat << 'EOF' > "$DST/Plugins.cfg"
# Defines plugins to load

# Define plugin folder
PluginFolder=/usr/lib/OGRE

# Define plugins
Plugin=RenderSystem_GL
EOF
}
